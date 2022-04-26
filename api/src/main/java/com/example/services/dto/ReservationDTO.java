package com.example.services.dto;

import javax.xml.crypto.Data;
import java.util.Date;

public class ReservationDTO {
    private Integer id;
    private Integer idUser;
    private Integer idAnnounce;
    private Date startDate;
    private Date endDate;
    private Boolean isAccepted;

    public ReservationDTO() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getIdUser() {
        return idUser;
    }

    public void setIdUser(Integer idUser) {
        this.idUser = idUser;
    }

    public Integer getIdAnnounce() {
        return idAnnounce;
    }

    public void setIdAnnounce(Integer idAnnounce) {
        this.idAnnounce = idAnnounce;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public Boolean getIsAccepted() {
        return isAccepted;
    }

    public void setIsAccepted(Boolean accepted) {
        this.isAccepted = accepted;
    }
}
