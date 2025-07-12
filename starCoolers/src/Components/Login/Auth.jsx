"use client"

import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function AuthPages() {
  const [activeTab, setActiveTab] = useState("login")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const navigate = useNavigate()
  const [successMessage, setSuccessMessage] = useState("")

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
    rememberMe: false,
  })

  const [signupData, setSignupData] = useState({
    username: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  })

  const handleLoginSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")
    setSuccessMessage("")

    try {
      const response = await axios.post(
        "http://localhost:8080/auth/login",
        {
          username: loginData.username,
          password: loginData.password,
          rememberMe: loginData.rememberMe,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, // if backend uses cookies
        },
      )

      // Success
      setSuccessMessage("Login successful! Redirecting...")

      if (response.data.token) {
        localStorage.setItem("token", response.data.token)
      }

      console.log("Login successful:", response.data)
      localStorage.setItem("userid", JSON.stringify(response.data.id))
      localStorage.setItem("userName", response.data.username)
      localStorage.setItem("userEmail", response.data.email)

      setTimeout(() => {
        navigate("/") // Redirect to home page
        console.log("Redirected to home")
      }, 2000)
    } catch (err) {
      console.error("Login error:", err)
      if (err.response) {
        setError(err.response.data.message || `Login failed (HTTP ${err.response.status})`)
      } else if (err.request) {
        setError("No response from server. Please check your connection.")
      } else {
        setError("Login failed. " + err.message)
      }
    } finally {
      setIsLoading(false)
    }
  }

  const handleSignupSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")
    setSuccessMessage("")

    if (signupData.password !== signupData.confirmPassword) {
      setError("Passwords don't match!")
      setIsLoading(false)
      return
    }

    if (!signupData.agreeTerms) {
      setError("Please agree to the Terms of Service and Privacy Policy")
      setIsLoading(false)
      return
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/auth/signup",
        {
          username: signupData.username,
          email: signupData.email,
          phone: signupData.phone,
          address: signupData.address,
          password: signupData.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        },
      )

      // Success
      setSuccessMessage("Account created successfully! Please check your email for verification.")
      setSignupData({
        username: "",
        email: "",
        phone: "",
        address: "",
        password: "",
        confirmPassword: "",
        agreeTerms: false,
      })

      console.log("Signup successful:", response.data)

      setTimeout(() => {
        setActiveTab("login")
        setSuccessMessage("")
      }, 3000)
    } catch (err) {
      console.error("Signup error:", err)
      if (err.response) {
        setError(err.response.data.message || `Signup failed (HTTP ${err.response.status})`)
      } else if (err.request) {
        setError("No response from server. Please check your connection.")
      } else {
        setError("Signup failed. " + err.message)
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo and Brand */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-blue-600 p-3 rounded-full">
              <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">StarCoolers</h1>
          <p className="text-gray-600 mt-2">Professional Appliance Maintenance</p>
          <div className="flex items-center justify-center gap-4 mt-3 text-sm text-gray-500">
            <span className="flex items-center gap-1">❄️ AC Service</span>
            <span className="flex items-center gap-1">🔧 Fridge & Washing Machine</span>
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-lg shadow-xl border-0 overflow-hidden">
          {/* Tab Navigation */}
          <div className="flex">
            <button
              onClick={() => setActiveTab("login")}
              className={`flex-1 py-3 px-4 text-center font-medium transition-colors ${
                activeTab === "login" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setActiveTab("signup")}
              className={`flex-1 py-3 px-4 text-center font-medium transition-colors ${
                activeTab === "signup" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Error/Success Messages */}
          {(error || successMessage) && (
            <div
              className={`p-4 m-4 rounded-md ${
                error
                  ? "bg-red-50 border border-red-200 text-red-700"
                  : "bg-green-50 border border-green-200 text-green-700"
              }`}
            >
              <div className="flex items-center">
                <span className="mr-2">{error ? "❌" : "✅"}</span>
                <span className="text-sm font-medium">{error || successMessage}</span>
              </div>
            </div>
          )}

          {/* Login Form */}
          {activeTab === "login" && (
            <div className="p-6">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>
                <p className="text-gray-600 mt-1">Sign in to access your service dashboard</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label htmlFor="login-email" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-gray-400">📧</span>
                    <input
                      type="text"
                      placeholder="Enter your username"
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      name="username"
                      value={loginData.username}
                      onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                      required
                      disabled={isLoading}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="login-password" className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-gray-400">🔒</span>
                    <input
                      id="login-password"
                      type="password"
                      placeholder="Enter your password"
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={loginData.password}
                      onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                      required
                      disabled={isLoading}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center space-x-2 text-sm">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      checked={loginData.rememberMe}
                      onChange={(e) => setLoginData({ ...loginData, rememberMe: e.target.checked })}
                      disabled={isLoading}
                    />
                    <span>Remember me</span>
                  </label>
                  <a href="#" className="text-sm text-blue-600 hover:underline">
                    Forgot password?
                  </a>
                </div>

                <button
                  type="button"
                  onClick={handleLoginSubmit}
                  disabled={isLoading}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isLoading ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Signing In...
                    </>
                  ) : (
                    "Sign In"
                  )}
                </button>
              </div>
            </div>
          )}

          {/* Signup Form */}
          {activeTab === "signup" && (
            <div className="p-6">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Create Account</h2>
                <p className="text-gray-600 mt-1">Join StarCoolers for reliable appliance maintenance</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label htmlFor="signup-name" className="block text-sm font-medium text-gray-700 mb-1">
                    User Name
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-gray-400">👤</span>
                    <input
                      id="signup-name"
                      type="text"
                      placeholder="User Name"
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={signupData.username}
                      onChange={(e) => setSignupData({ ...signupData, username: e.target.value })}
                      required
                      disabled={isLoading}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="signup-email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-gray-400">📧</span>
                    <input
                      id="signup-email"
                      type="email"
                      placeholder="your@email.com"
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={signupData.email}
                      onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                      required
                      disabled={isLoading}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="signup-phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-gray-400">📞</span>
                    <input
                      id="signup-phone"
                      type="tel"
                      placeholder="1234512345"
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={signupData.phone}
                      onChange={(e) => setSignupData({ ...signupData, phone: e.target.value })}
                      required
                      disabled={isLoading}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="signup-password" className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-gray-400">🔒</span>
                    <input
                      id="signup-password"
                      type="password"
                      placeholder="Create a strong password"
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={signupData.password}
                      onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                      required
                      disabled={isLoading}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="signup-confirm-password" className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-gray-400">🔒</span>
                    <input
                      id="signup-confirm-password"
                      type="password"
                      placeholder="Confirm your password"
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={signupData.confirmPassword}
                      onChange={(e) => setSignupData({ ...signupData, confirmPassword: e.target.value })}
                      required
                      disabled={isLoading}
                    />
                  </div>
                </div>

                <div className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    className="mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    checked={signupData.agreeTerms}
                    onChange={(e) => setSignupData({ ...signupData, agreeTerms: e.target.checked })}
                    required
                    disabled={isLoading}
                  />
                  <label className="text-sm text-gray-600">
                    I agree to the{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      Privacy Policy
                    </a>
                  </label>
                </div>

                <button
                  type="button"
                  onClick={handleSignupSubmit}
                  disabled={isLoading}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isLoading ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Creating Account...
                    </>
                  ) : (
                    "Create Account"
                  )}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-sm text-gray-600">
          <p>Need help? Contact us at</p>
          <div className="flex items-center justify-center gap-4 mt-2">
            <a href="tel:+1234567890" className="flex items-center gap-1 hover:text-blue-600 transition-colors">
              📞 (123) 456-7890
            </a>
            <a
              href="mailto:support@starcoolers.com"
              className="flex items-center gap-1 hover:text-blue-600 transition-colors"
            >
              📧 support@starcoolers.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
