package com.example.jewelry_be.repository;


import com.example.jewelry_be.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface IProductRepository extends JpaRepository<Product, Integer> {
    @Query(value = "select * " +
            "from product " +
            "         join category_product cp on product.category_product_id = cp.id " +
            "         join type_product tp on tp.id = product.type_product_id " +
            "         join supplier s on s.id = product.supplier_id " +
            "where product.flag_deleted = false " +
            "  and (s.id = :trademark or cp.id = :material or tp.id = :typeProduct)", nativeQuery = true)
    Page<Product> findAllProduct(Pageable pageable,
                                 @Param("trademark") Integer trademark,
                                 @Param("material") Integer material,
                                 @Param("typeProduct") Integer typeProduct);
    @Query(value = "select * " +
            "from product p " +
            "         join category_product cp on p.category_product_id = cp.id " +
            "         join type_product tp on tp.id = p.type_product_id " +
            "         join supplier s on s.id = p.supplier_id " +
            "where p.flag_deleted = false ", nativeQuery = true)
    Page<Product> findAll(Pageable pageable);

}
