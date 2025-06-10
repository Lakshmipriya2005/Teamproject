package starcooler.backend.Service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import starcooler.backend.Dtos.BookedUserDtos;
import starcooler.backend.Entity.BookedUser;
import starcooler.backend.Entity.UserEntity;
import starcooler.backend.Repo.BookedUserRepo;
import starcooler.backend.Repo.UserRepository;

@Service
public class BookedUserService {
    @Autowired
    private BookedUserRepo bookedUserRepo;

    @Autowired
    private UserRepository userRepo;

    public void bookedUser(BookedUserDtos dtos, Long id) {
        Optional<UserEntity> user = userRepo.findById(id);
        if(user.isPresent()) {
           BookedUser bookedUser = new BookedUser();
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

   
    
}
