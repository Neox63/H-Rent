package com.example.services.dto;

public class PictureDTO {
    private Integer id;
    private String location;
    private Integer idAnnounce;

    public PictureDTO() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Integer getIdAnnounce() {
        return idAnnounce;
    }

    public void setIdAnnounce(Integer idAnnounce) {
        this.idAnnounce = idAnnounce;
    }
}
