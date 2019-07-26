package com.app.models;

import com.app.helpers.View;
import com.fasterxml.jackson.annotation.JsonView;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

import static javax.persistence.CascadeType.ALL;


@Entity
@Table(name = "department")
@PrimaryKeyJoinColumn(name="id")
public class Department extends BaseEntity {

    @Column(name = "code")
    @JsonView(View.Summary.class)
    private String code;

    @OneToMany(cascade = ALL, mappedBy = "department", targetEntity = Employee.class)
    private List<Employee> employees;

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    public Department() {
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    public Department(String name,
                      Date created,
                      Date lastUpdate,
                      User user,
                      String code,
                      List<Employee> employees) {
        super(name, created, lastUpdate, user);
        this.code = code;
        this.employees = employees;
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    public String getCode() {
        return code;
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    public void setCode(String code) {
        this.code = code;
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    public List<Employee> getEmployees() {
        return employees;
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    public void setEmployees(List<Employee> employees) {
        this.employees = employees;
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        if (!super.equals(o)) return false;

        Department that = (Department) o;

        return code.equals(that.code);
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    @Override
    public int hashCode() {
        int result = super.hashCode();
        result = 31 * result + code.hashCode();
        return result;
    }
}