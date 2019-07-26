package com.app.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonView;
import com.app.helpers.View;

import javax.inject.Named;
import javax.persistence.*;
import java.util.Date;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public class BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    @Column(name = "id")
    @JsonView(View.Summary.class)
    protected Integer id;

    @Column(name = "name")
    @JsonView(View.Summary.class)
    protected String name;

    @Temporal(TemporalType.DATE)
    protected Date created;

    @Temporal(TemporalType.DATE)
    protected Date lastUpdate;

    @Version
    protected Integer version;

    @ManyToOne
    @JoinColumn(name="user_id")
    protected User user;

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    public BaseEntity() {
        super();
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    public BaseEntity(String name, Date created, Date lastUpdate, User user) {
        this.name = name;
        this.created = new Date();
        this.lastUpdate = new Date();
        this.user = user;
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    public Integer getId() {
        return id;
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    public void setId(Integer id) {
        this.id = id;
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    public String getName() {
        return name;
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    public void setName(String name) {
        this.name = name;
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    public Date getCreated() {
        return created;
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    public void setCreated(Date created) {
        this.created = created;
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    public Date getLastUpdate() {
        return lastUpdate;
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    public void setLastUpdate(Date lastUpdate) {

        this.lastUpdate = new Date();
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    public User getUser() {
        return user;
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    public void setUser(User user) {
        this.user = user;
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    public Integer getVersion() {
        return version;
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    public void setVersion(Integer version) {
        this.version = version;
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        BaseEntity entity = (BaseEntity) o;

        if (id != null ? !id.equals(entity.id) : entity.id != null) return false;
        if (name != null ? !name.equals(entity.name) : entity.name != null) return false;
        if (created != null ? !created.equals(entity.created) : entity.created != null) return false;
        return lastUpdate != null ? lastUpdate.equals(entity.lastUpdate) : entity.lastUpdate == null;
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + (created != null ? created.hashCode() : 0);
        result = 31 * result + (lastUpdate != null ? lastUpdate.hashCode() : 0);
        return result;
    }

}