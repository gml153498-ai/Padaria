package com.Java_Doce.Java.dto;

import lombok.*;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CompraRequestDTO {
    private String usuarioId;
    private List<String> produtosIds;
    private Integer quantidade;
}

