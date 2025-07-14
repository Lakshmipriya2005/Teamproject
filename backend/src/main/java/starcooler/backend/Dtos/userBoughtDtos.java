package starcooler.backend.Dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class userBoughtDtos {
      private int id;
    
    private String name;
    private String email;
    private String phoneNumber;
    private String address;
    private String pr;
    private String serviceType;
    private double price;
     private String product;
    private String productType;
    
    
}
