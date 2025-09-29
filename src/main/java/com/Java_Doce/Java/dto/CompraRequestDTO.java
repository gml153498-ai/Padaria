package com.Java_Doce.Java.dto;

import lombok.*;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CompraRequestDTO {
    private Long usuarioId;
    private List<Long> produtosIds;
    private Integer quantidade;
}

