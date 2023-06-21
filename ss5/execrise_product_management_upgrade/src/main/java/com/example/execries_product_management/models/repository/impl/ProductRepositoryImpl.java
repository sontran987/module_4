package com.example.execries_product_management.models.repository.impl;

import com.example.execries_product_management.models.model.Product;
import com.example.execries_product_management.models.repository.ConnectionUtils;
import com.example.execries_product_management.models.repository.IProductRepository;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.springframework.stereotype.Repository;

import javax.persistence.NoResultException;
import javax.persistence.TypedQuery;
import java.lang.reflect.InvocationTargetException;
import java.util.List;

@Repository
public class ProductRepositoryImpl implements IProductRepository {
    //    private static List<Product> productList = new ArrayList<>();
//
//    static {
//        productList.add(new Product(1, "Iphone5", 1202, "iPhone 5 12GB, cap USB-C sang Lightning", "cong ty Thietquan"));
//        productList.add(new Product(2, "Iphone6", 2134, "iPhone 6 36GB, cap USB-C sang Lightning", "cong ty Thietquan"));
//        productList.add(new Product(3, "Iphone7", 24423, "iPhone 7 128GB, cap USB-C sang Lightning", "cong ty Thietquan"));
//        productList.add(new Product(4, "Iphone8", 23467, "iPhone 8 526GB, cap USB-C sang Lightning", "cong ty Thietquan"));
//        productList.add(new Product(5, "Iphone9", 454545, "iPhone 9 128GB, cap USB-C sang Lightning", "cong ty Thietquan"));
//        productList.add(new Product(6, "Iphone18", 897817, "iPhone 18 128GB, cap USB-C sang Lightning", "cong ty Thietquan"));
//
//    }
    private final static String SELECT_ALL_PRODUCT = "select p from Product as p";

    @Override
    public List<Product> display() {
        return ConnectionUtils.getEntityManager().createQuery(SELECT_ALL_PRODUCT).getResultList();
    }

    @Override
    public Product getProductById(int id) {
        try {
            return (Product) ConnectionUtils.getEntityManager().createQuery("select p from Product as p where p.id =:id").setParameter("id", id).getSingleResult();
        } catch (Exception e) {
            return null;
        }
    }

    @Override
    public boolean addProduct(Product product) {
        Session session = null;
        Transaction transaction = null;
        try {
            session = ConnectionUtils.getSessionFactory().openSession();
            transaction = session.beginTransaction();
            session.save(product);
            transaction.commit();
            ConnectionUtils.getEntityManager().clear();
        } catch (Exception e) {
            e.printStackTrace();
            if (transaction != null) {
                transaction.rollback();
            }
        } finally {
            if (session != null) {
                session.close();
            }
        }

        return true;
    }

    @Override
    public boolean editProduct(Product product) {
        Session session = null;
        Transaction transaction = null;
        try {
            session = ConnectionUtils.getSessionFactory().openSession();
            transaction = session.beginTransaction();
            Product product1 = getProductById(product.getId());
            product1.setName(product.getName());
            product1.setPrice(product.getPrice());
            product1.setDescribes(product.getDescribes());
            product1.setProducer(product.getProducer());
            session.saveOrUpdate(product1);
            transaction.commit();
        } catch (Exception e) {
            e.printStackTrace();
            if (transaction != null) {
                transaction.rollback();
            }
        } finally {
            if (session != null) {
                session.close();
            }
        }
        return true;
    }

    @Override
    public boolean deleteProduct(int id) {
        Session session = null;
        Transaction transaction = null;
        try {
            session = ConnectionUtils.getSessionFactory().openSession();
            transaction = session.beginTransaction();
            session.delete(getProductById(id));
            transaction.commit();
        } catch (Exception e) {
            e.printStackTrace();
            if (transaction != null) {
                transaction.rollback();
            }
        } finally {
            if (session != null) {
                session.close();
            }
        }

        return true;
    }


    @Override
    public List<Product> searchProduct(String name) {
        String SEARCH_PRODUCT = "select p from Product as p where p.name like '%" + name + "%'";
        return ConnectionUtils.getEntityManager().createQuery(SEARCH_PRODUCT).getResultList();
    }
}
