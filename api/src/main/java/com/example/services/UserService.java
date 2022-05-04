package com.example.services;

import com.example.model.DocumentType;
import com.example.model.User;
import com.example.repository.UserRepository;
import com.example.services.coverter.EntityDtoConverter;
import com.example.services.coverter.UserConverter;
import com.example.services.dto.DocumentTypeDTO;
import com.example.services.dto.UserDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Objects;

@Service
public class UserService extends GenericCrudService<User, UserDTO,Integer> {
    public UserService(UserRepository repository, UserConverter converter) {
        super(repository, converter);
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    UserDTO update(UserDTO userDTO, Integer id) {
        User user = this.repository.getById(id);
        if(Objects.equals(user.getId(),id)) {
            user = this.converter.dtoToEntity(userDTO);
            user = this.repository.save(user);
            return this.converter.entityToDto(user);
        }
        return null;
    }
}
