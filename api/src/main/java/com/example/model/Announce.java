package com.example.model;

import javax.persistence.*;

@Entity
@Table
public class Announce {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column
    private Integer id;

    @Column
    private String title;

    @Column
    private String description;

    @Column
    private String postalCode;

    @Column
    private String city;

    @Column
    private String country;

    @Column
    private Double price;

    @Column
    private Double caution;

    public Announce() {
    }

    public Announce(Integer id,String title, String description, String postalCode, String city, String country, Double price, Double caution) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.postalCode = postalCode;
        this.city = city;
        this.country = country;
        this.price = price;
        this.caution = caution;
    }

    public Integer getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public String getPostalCode() {
        return postalCode;
    }

    public String getCity() {
        return city;
    }

    public String getCountry() {
        return country;
    }

    public Double getPrice() {
        return price;
    }

    public Double getCaution() {
        return caution;
    }
}
