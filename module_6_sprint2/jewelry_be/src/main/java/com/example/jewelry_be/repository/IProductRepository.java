package com.example.jewelry_be.repository;


import com.example.jewelry_be.model.Product;
import com.example.jewelry_be.projection.DetailProductProjection;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface IProductRepository extends JpaRepository<Product, Integer> {
    @Query(value = "select * " +
            "from product p" +
            "         join category_product cp on p.category_product_id = cp.id " +
            "         join type_product tp on tp.id = p.type_product_id " +
            "         join supplier s on s.id = p.supplier_id " +
            "where p.flag_deleted = false " +
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

    @Query(value = "select p.id as productId," +
            "       p.name_product as productName," +
            "       GROUP_CONCAT(i.image_url) AS image," +
            "       p.describe_product as productDescribe," +
            "       p.quantity," +
            "       p.price," +
            "       cp.category_product_name AS category," +
            "       s.name_supplier as supplier," +
            "       tp.name_type_product as productType" +
            " from product p" +
            "         join category_product cp on p.category_product_id = cp.id" +
            "         join type_product tp on tp.id = p.type_product_id" +
            "         join supplier s on s.id = p.supplier_id" +
            "         join image i on p.id = i.product_id" +
            " where p.flag_deleted = false and p.id = :id", nativeQuery = true)
    DetailProductProjection findProductById(@Param("id") Integer id);


}
