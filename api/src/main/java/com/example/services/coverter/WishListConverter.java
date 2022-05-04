package com.example.services.coverter;

import com.example.model.WishList;
import com.example.services.dto.WishListDTO;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class WishListConverter implements EntityDtoConverter<WishList, WishListDTO> {
    @Override
    public WishList dtoToEntity(WishListDTO wishListDTO) {
        return new WishList(wishListDTO.getId(), wishListDTO.getAnnounceId(), wishListDTO.getUserId());
    }

    @Override
    public WishListDTO entityToDto(WishList wishList) {
        WishListDTO wishListDTO = new WishListDTO();
        BeanUtils.copyProperties(wishList, wishListDTO);
        return wishListDTO;
    }

    @Override
    public List<WishListDTO> listEntityToListDto(List<WishList> wishLists) {
        List<WishListDTO> wishListDTOS = new ArrayList<>();
        for (WishList wishList : wishLists) {
            wishListDTOS.add(entityToDto(wishList));
        }
        return wishListDTOS;

    }

    @Override
    public List<WishList> listDtoToListEntity(List<WishListDTO> wishListDTOS) {
        List<WishList> wishLists = new ArrayList<>();
        for (WishListDTO wishListDTO : wishListDTOS) {
            wishLists.add(dtoToEntity(wishListDTO));
        }
        return wishLists;
    }
}
