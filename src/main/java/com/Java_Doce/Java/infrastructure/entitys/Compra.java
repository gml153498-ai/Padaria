package com.Java_Doce.Java.infrastructure.entitys;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "compras")
public class Compra {
    @Id
    private String id;

    @DBRef
    private Usuario usuario;

    @DBRef
    private List<Padaria> produtos;

    private LocalDateTime dataCompra;
    private Double valorTotal;

}
