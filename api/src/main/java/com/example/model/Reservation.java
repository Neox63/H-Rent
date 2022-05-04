package com.example.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column
    private Integer id;

    //@OneToOne(cascade = CascadeType.ALL)
    //@JoinColumn(name = "User_id", referencedColumnName = "id")
    @Column
    private Integer idUser;

    //@OneToOne(cascade = CascadeType.ALL)
    //@JoinColumn(name = "Announce_id", referencedColumnName = "id")
    @Column
    private Integer idAnnounce;

    @Column
    private Date startDate;

    @Column
    private Date endDate;

    @Column
    private Boolean isAccepted;

    public Reservation() {
    }

    public Reservation(Integer id, Integer idUser, Integer idAnnounce, Date startDate, Date endDate, Boolean isAccepted) {
        this.id = id;
        this.idUser = idUser;
        this.idAnnounce = idAnnounce;
        this.startDate = startDate;
        this.endDate = endDate;
        this.isAccepted = isAccepted;
    }

    public Integer getId() {
        return id;
    }

    public Integer getIdUser() {
        return idUser;
    }

    public Integer getIdAnnounce() {
        return idAnnounce;
    }

    public Date getStartDate() {
        return startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public Boolean getIsAccepted() {
        return isAccepted;
    }
}
