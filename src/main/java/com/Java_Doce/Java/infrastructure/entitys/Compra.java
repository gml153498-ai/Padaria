package com.Java_Doce.Java.infrastructure.entitys;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "tb_compra")
@Getter
@Setter
@Builder
@NoArgsConstructor   // Gera construtor padrão sem argumentos
@AllArgsConstructor  // Gera construtor com todos os argumentos (para Builder)
public class Compra {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;

    @ManyToMany
    @JoinTable(
            name = "tb_compra_produto",
            joinColumns = @JoinColumn(name = "compra_id"),
            inverseJoinColumns = @JoinColumn(name = "padaria_id")
    )
    private List<Padaria> produtos;

    @Column(name = "data_compra")
    private LocalDateTime dataCompra;

    @Column(name = "valor_total")
    private Double valorTotal;
}
