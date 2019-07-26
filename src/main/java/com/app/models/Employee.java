package com.app.models;

import com.fasterxml.jackson.annotation.JsonView;
import com.app.helpers.View;

import javax.persistence.*;
import java.util.Date;


@Entity
@Table(name = "employee")
@PrimaryKeyJoinColumn(name="id")
public class Employee extends BaseEntity {

    @Column(name = "last_name")
    @JsonView(View.Summary.class)
    private String lastName;

    @Column(name = "cpf")
    @JsonView(View.Summary.class)
    private String cpf;

    @Column(name = "email")
    @JsonView(View.Summary.class)
    private String email;

    @Column(name = "phone")
    @JsonView(View.Summary.class)
    private String phone;

    @Column(name = "cel_phone")
    @JsonView(View.Summary.class)
    private String celPhone;

    @ManyToOne(targetEntity = Department.class)
    @JoinColumn(name="department_id")
    @JsonView(View.FullInformation.class)
    private Department department;

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    public Employee() {
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    public Employee(String name,
                    Date created,
                    Date lastUpdate,
                    User user,
                    String lastName,
                    String cpf,
                    String email,
                    String phone,
                    String celPhone,
                    Department department) {
        super(name, created, lastUpdate, user);
        this.lastName = lastName;
        this.cpf = cpf;
        this.email = email;
        this.phone = phone;
        this.celPhone = celPhone;
        this.department = department;
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    public String getLastName() {
        return lastName;
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    public String getCpf() {
        return cpf;
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    public String getEmail() {
        return email;
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    public void setEmail(String email) {
        this.email = email;
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    public String getPhone() {
        return phone;
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    public void setPhone(String phone) {
        this.phone = phone;
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    public String getCelPhone() {
        return celPhone;
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    public void setCelPhone(String celPhone) {
        this.celPhone = celPhone;
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    public Department getDepartment() {
        return department;
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    public void setDepartment(Department department) {
        this.department = department;
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        if (!super.equals(o)) return false;

        Employee employee = (Employee) o;

        if (!cpf.equals(employee.cpf)) return false;
        return email.equals(employee.email);
    }

    //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

    @Override
    public int hashCode() {
        int result = super.hashCode();
        result = 31 * result + cpf.hashCode();
        result = 31 * result + email.hashCode();
        return result;
    }
}