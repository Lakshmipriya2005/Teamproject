package starcooler.backend.Service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import starcooler.backend.Dtos.BookedUserDtos;
import starcooler.backend.Dtos.userBoughtDtos;
import starcooler.backend.Entity.BookedUser;
import starcooler.backend.Entity.UserBought;
import starcooler.backend.Entity.UserEntity;
import starcooler.backend.Repo.BookedUserRepo;
import starcooler.backend.Repo.UserRepository;
import starcooler.backend.Repo.userBoughtRepo;

@Service
public class BookedUserService {
    @Autowired
    private BookedUserRepo bookedUserRepo;
    @Autowired
    private userBoughtRepo UserBoughtRepo;

    @Autowired
    private UserRepository userRepo;

    public void bookedUser(BookedUserDtos dtos, Long id) {
        Optional<UserEntity> user = userRepo.findById(id);
        BookedUser bookedUser = new BookedUser();
        if(user.isPresent()) {
           
            bookedUser.setUserId(id);
            bookedUser.setName(dtos.getName());
            bookedUser.setEmail(dtos.getEmail());
            bookedUser.setPhoneNumber(dtos.getPhoneNumber());
            bookedUser.setAddress(dtos.getAddress());
            bookedUser.setService(dtos.getService());
            bookedUser.setPrice(dtos.getPrice());
            bookedUser.setServiceType(dtos.getServiceType());
            DateTimeFormatter dateFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
            DateTimeFormatter timeFormatter = DateTimeFormatter.ofPattern("HH:mm:ss");

            bookedUser.setBookingDate(LocalDate.now().format(dateFormatter));
        bookedUser.setBookingTime(LocalTime.now().format(timeFormatter));
            bookedUserRepo.save(bookedUser);
        } else {
            throw new RuntimeException("User not found");
        }
       
    }

    public void productBought(userBoughtDtos dtos, Long id) {
        Optional<UserEntity> user = userRepo.findById(id);
        UserBought userBought = new UserBought();
        if(user.isPresent()){
            userBought.setUserId(id);
            userBought.setName(dtos.getName());
            userBought.setEmail(dtos.getEmail());
            //System.out.println(dtos.getPhoneNumber());
            userBought.setPhoneNumber(dtos.getPhoneNumber());
            userBought.setAddress(dtos.getAddress());
            userBought.setProduct(dtos.getProduct());
              userBought.setProductType(dtos.getProductType());
            userBought.setPrice(dtos.getPrice());
          
            DateTimeFormatter dateFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
            DateTimeFormatter timeFormatter = DateTimeFormatter.ofPattern("HH:mm:ss");

        userBought.setBookingDate(LocalDate.now().format(dateFormatter));
        userBought.setBookingTime(LocalTime.now().format(timeFormatter));
        UserBoughtRepo.save(userBought);
        } else {
            throw new RuntimeException("User not found");
        }
    }

   
    
}
