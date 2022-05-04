package com.example.model;

import javax.persistence.*;

@Entity
@Table
public class WishList {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column
    private Integer id;

    //@OneToOne(cascade = CascadeType.ALL)
    //@JoinColumn(name = "Announce_id", referencedColumnName = "id")
    @Column
    private Integer announceId;

    //@OneToOne(cascade = CascadeType.ALL)
    //@JoinColumn(name = "User_id", referencedColumnName = "id")
    @Column
    private Integer userId;

    public WishList() {
    }

    public WishList(Integer id, Integer announceId, Integer userId) {
        this.id = id;
        this.announceId = announceId;
        this.userId = userId;
    }

    public int getId() {
        return id;
    }

    public int getAnnounceId() {
        return announceId;
    }

    public int getUserId() {
        return userId;
    }
}
