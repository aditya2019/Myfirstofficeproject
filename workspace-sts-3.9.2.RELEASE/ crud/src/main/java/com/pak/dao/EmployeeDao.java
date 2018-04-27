package com.pak.dao;

import java.util.List;

import com.pak.bean.Employee;

public interface EmployeeDao {

 public void create(Employee employee);

 public void update(Employee employee);

 public int deleteById(int id);

 public Employee findById(int id);

// public List findAll();

}
