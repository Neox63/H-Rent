package com.example;

import com.example.property.FileStorageProperties;
import com.example.services.AnnounceService;
import com.example.services.UserService;
import com.example.services.dto.AnnounceDTO;
import com.example.services.dto.UserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties({
        FileStorageProperties.class
})
public class HrentApplication {

    @Autowired
    private AnnounceService announceService;

    @Autowired
    private UserService userService;

    public static void main(String[] args) {
        SpringApplication.run(HrentApplication.class);
    }
    @EventListener(ApplicationReadyEvent.class)
    public void createDefaultData() {
        AnnounceDTO announceDTO = new AnnounceDTO();
        announceDTO.setId(1);
        announceDTO.setTitle("Title");
        announceDTO.setDescription("Description");
        announceDTO.setPrice(400.0);
        announceDTO.setCity("City");
        announceDTO.setPostalCode("PostalCode");
        announceDTO.setCountry("Country");
        announceDTO.setCaution(100.0);
        announceDTO=this.announceService.create(announceDTO);

        UserDTO userDTO = new UserDTO();
        userDTO.setId(1);
        userDTO.setFirstName("FirstName");
        userDTO.setLastName("LastName");
        userDTO.setEmail("Email");
        userDTO.setCity("City");
        userDTO.setZipCode("PostalCode");
        userDTO.setCountry("Country");
        userDTO.setPhone("Phone");
        userDTO.setRegisteredAt(new java.sql.Date(System.currentTimeMillis()));
        userDTO.setStreet("Street");
        userDTO = this.userService.create(userDTO);
    }
}
