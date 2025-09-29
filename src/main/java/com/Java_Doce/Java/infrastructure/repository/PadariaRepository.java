package com.Java_Doce.Java.infrastructure.repository;

import com.Java_Doce.Java.infrastructure.entitys.Padaria;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PadariaRepository extends JpaRepository<Padaria, Long> {
}
