package starcooler.backend.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import starcooler.backend.Dtos.BookedUserDtos;
import starcooler.backend.Dtos.userBoughtDtos;
import starcooler.backend.Service.BookedUserService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/booked")
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
public class BookedUserController {
    @Autowired
    private BookedUserService bookedUserService;

     @PostMapping("/bookeduser/{id}")
    public ResponseEntity<String> bookService(@RequestBody BookedUserDtos dtos, @PathVariable Long id) {
        try {
            bookedUserService.bookedUser(dtos, id);
            return ResponseEntity.ok("Service booked successfully!");
        } catch (RuntimeException e) {
           
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }
    @PostMapping("/userbought/{id}")
    public ResponseEntity<String> userBought(@RequestBody userBoughtDtos dtos, @PathVariable Long id) {
        try {
            bookedUserService.productBought(dtos, id);
            return ResponseEntity.ok("Order Placed successfully!");
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }

    }
    
}
