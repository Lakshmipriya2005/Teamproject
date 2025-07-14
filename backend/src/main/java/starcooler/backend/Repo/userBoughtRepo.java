package starcooler.backend.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import starcooler.backend.Entity.UserBought;

public interface userBoughtRepo extends JpaRepository<UserBought, Integer> {
    // This interface will automatically provide CRUD operations for UserBought entity
    // You can add custom query methods if needed
    
}
