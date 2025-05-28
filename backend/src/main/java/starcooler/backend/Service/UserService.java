package starcooler.backend.Service;



import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import starcooler.backend.Dtos.UserDto;
import starcooler.backend.Entity.UserEntity;
import starcooler.backend.Repo.UserRepository;
import org.springframework.security.core.Authentication;





@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;
    
     @Autowired
    private JWTService jwtService;

    @Autowired
    AuthenticationManager authManager;
   

    public String register(UserDto dto) {
        if (userRepository.findByUsername(dto.getUsername())!=null) {
            throw new RuntimeException("User already exists");
        }
        if (userRepository.findByEmail(dto.getEmail()).isPresent()) {
            throw new RuntimeException("Email already exists");
        }

        UserEntity user = new UserEntity();
        UserDto usersecDto = new UserDto();
        usersecDto.setUsername(dto.getUsername());
        usersecDto.setEmail(dto.getEmail());
        user.setUsername(dto.getUsername());
        user.setEmail(dto.getEmail());
        user.setRole("ADMIN");
        user.setPassword(passwordEncoder.encode(dto.getPassword()));
      
       userRepository.save(user);

     
      // profile.setUserId(user);
       
     
        
        
        return "User registered successfully!";
    }
    @Transactional
    public String authenticate(UserDto user) {
       Authentication authentication = authManager.authenticate(new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword()));
   if (authentication.isAuthenticated()) 
        {
         return jwtService.generateToken(user.getUsername());
        } else 
        {
            return "fail";
        }
        //userRepository.updateUserLoggedInStatus(username, "false");
       // return user.getId();
    }
}
