package starcooler.backend.Repo;




import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import starcooler.backend.Entity.UserEntity;



//import loanapp.backend.Dtos.UserSecureDto;


public interface UserRepository extends JpaRepository<UserEntity, Long> {
    @Query(value = "SELECT * FROM usersdetails WHERE BINARY username = :username", nativeQuery = true)
    UserEntity findByUsername(@Param("username") String username);
    
    Optional<UserEntity> findByEmail(String email);


    @Query("SELECT u.id FROM UserEntity  u WHERE u.username = :username")
    int getIdByName(@Param("username") String username);
    //Optional<UserProfile> findByRefId(Long userId);
   
// @Modifying
// @Query("UPDATE User u SET u.loggedIn = true WHERE u.username = :username")
// void updateUserLoggedInStatus(@Param("username") String username);


}
