package com.example.services.coverter;

import com.example.model.User;
import com.example.services.dto.UserDTO;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class UserConverter implements EntityDtoConverter<User, UserDTO> {
    @Override
    public User dtoToEntity(UserDTO userDTO) {
        return new User(userDTO.getId(), userDTO.getFirstName(), userDTO.getLastName(), userDTO.getEmail(), userDTO.getRegisteredAt(),userDTO.getCity(),userDTO.getCountry(),userDTO.getZipCode(),userDTO.getStreet(),userDTO.getPhone(),userDTO.getIdDocument(),userDTO.getPassword());
    }

    @Override
    public UserDTO entityToDto(User user) {
        UserDTO userDTO = new UserDTO();
        BeanUtils.copyProperties(user, userDTO);
        return userDTO;
    }

    @Override
    public List<UserDTO> listEntityToListDto(List<User> users) {
        List<UserDTO> userDTOS = new ArrayList<>();
        for (User user : users) {
            userDTOS.add(entityToDto(user));
        }
        return userDTOS;
    }

    @Override
    public List<User> listDtoToListEntity(List<UserDTO> userDTOS) {
        List<User> users = new ArrayList<>();
        for (UserDTO userDTO : userDTOS) {
            users.add(dtoToEntity(userDTO));
        }
        return users;
    }
}
