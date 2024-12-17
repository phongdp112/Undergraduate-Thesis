package com.phongdp112.backend.config.database;

import jakarta.persistence.EntityManagerFactory;
import java.util.HashMap;
import java.util.Objects;
import javax.sql.DataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.JpaVendorAdapter;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration
@EnableTransactionManagement
@EnableJpaAuditing

@EnableJpaRepositories(
        basePackages = { "com.phongdp112.backend.repository.mariadb" },
        entityManagerFactoryRef = "mariadbEntityManagerFactory",
        transactionManagerRef = "mariadbTransactionManager"
)
public class MariaDatabaseConfig {

    @Autowired
    Environment env;

    @Bean(name = "mariadbDataSource")
    //@ConfigurationProperties(prefix = "spring.datasource")
    public DataSource dataSource() {
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setUrl(env.getProperty("spring.datasource.mariadb.url"));
        dataSource.setUsername(env.getProperty("spring.datasource.mariadb.username"));
        dataSource.setPassword(env.getProperty("spring.datasource.mariadb.password"));

        return dataSource;
    }

    @Bean(name = "mariadbEntityManagerFactory")
    public LocalContainerEntityManagerFactoryBean entityManagerFactory() {
        LocalContainerEntityManagerFactoryBean em = new LocalContainerEntityManagerFactoryBean();
        em.setDataSource(dataSource());
        JpaVendorAdapter adapter = new HibernateJpaVendorAdapter();
        em.setJpaVendorAdapter(adapter);
        HashMap<String, Object> properties = new HashMap<String, Object>();
        properties.put("hibernate.hbm2ddl.auto", "update"); // Thay ddl thành hibernate.hbm2ddl.auto
        properties.put("hibernate.show_sql", "true"); // Hiển thị SQL (tùy chọn)
        properties.put("hibernate.format_sql", "true"); // Định dạng SQL (tùy chọn)

        em.setJpaPropertyMap(properties);
        em.setPackagesToScan("com.phongdp112.backend.domain.mariadb");
        em.setPersistenceUnitName("mariadb");
        return em;
    }

    @Bean(name = "mariadbTransactionManager")
    public PlatformTransactionManager mariaDbTransactionManager(@Qualifier("mariadbEntityManagerFactory") EntityManagerFactory entityManagerFactory) {
        return new JpaTransactionManager(Objects.requireNonNull(entityManagerFactory));
    }
}
