package starcooler.backend.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Table(name = "UserBought")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserBought {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long userId;
    private String name;
    private String email;
    private String phoneNumber;
    private String address;
   
    private String product;
    private String productType;
    private double price;
    private String bookingDate;
    private String bookingTime;

    
    
}
