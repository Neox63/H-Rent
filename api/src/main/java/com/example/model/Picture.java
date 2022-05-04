package com.example.model;

import javax.persistence.*;

@Entity
@Table
public class Picture {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column
    private Integer id;

    @Column
    private String location;

    //@OneToOne(cascade = CascadeType.ALL)
    //@JoinColumn(name = "Announce_id", referencedColumnName = "id")
    @Column
    private Integer idAnnounce;

    public Picture() {
    }

    public Picture(Integer id, String location, Integer idAnnounce) {
        this.id = id;
        this.location = location;
        this.idAnnounce = idAnnounce;
    }

    public Integer getId() {
        return id;
    }

    public String getLocation() {
        return location;
    }

    public Integer getIdAnnounce() {
        return idAnnounce;
    }
}
