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
@Table(name = "bookedusers")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class BookedUser {
      @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
      private int bookingId;
    private Long userId; // Assuming you want to link this to a user entity
    private String name;
    private String email;
    private String phoneNumber;
    private String address;
    private String service;
    private String serviceType;
    private Long price;
    private String bookingDate;
    private String bookingTime;
  
}
