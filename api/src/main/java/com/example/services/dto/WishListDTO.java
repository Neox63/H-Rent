package com.example.services.dto;

public class WishListDTO {
    private Integer id;
    private Integer announceId;
    private Integer userId;

    public WishListDTO() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getAnnounceId() {
        return announceId;
    }

    public void setAnnounceId(Integer announceId) {
        this.announceId = announceId;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }
}
