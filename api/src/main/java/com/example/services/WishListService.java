package com.example.services;

import com.example.model.WishList;
import com.example.repository.WishListRepository;
import com.example.services.coverter.EntityDtoConverter;
import com.example.services.coverter.WishListConverter;
import com.example.services.dto.WishListDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Objects;

@Service
public class WishListService extends GenericCrudService<WishList, WishListDTO,Integer> {
    public WishListService(WishListRepository repository, WishListConverter converter) {
        super(repository, converter);
    }
    @Override
    @Transactional(rollbackFor = Exception.class)
    WishListDTO update(WishListDTO wishListDTO, Integer id) {
        WishList wishList = this.repository.getById(id);
        if(Objects.equals(wishList.getId(),id)) {
            wishList = this.converter.dtoToEntity(wishListDTO);
            wishList = this.repository.save(wishList);
            return this.converter.entityToDto(wishList);
        }
        return null;
    }
}
