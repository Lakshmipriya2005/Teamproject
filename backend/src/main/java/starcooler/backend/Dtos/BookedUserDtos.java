package starcooler.backend.Dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BookedUserDtos {

      private int bookingId;
    
    private String name;
    private String email;
    private String phoneNumber;
    private String address;
    private String service;
    private String serviceType;
    private double price;
    private String bookingDate;
    private String bookingTime;
  
}