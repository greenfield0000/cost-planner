package greenfield.group.com.kitchenservice.model;


import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import java.util.Set;

/**
 * Описние сущности "Ингридиент блюда"
 */

@Data
@Entity
@Table(name = "k_ingridient")
@EqualsAndHashCode(callSuper = true)
public class IngredientDetail extends BaseEntity {
    @ManyToMany(mappedBy = "ingredientDetails")
    public Set<Dish> dishSet;
    // название ингридиента
    @Column(name = "name")
    public String name;
    // вес ингридиента
    @Column(name = "weight")
    public int weight;
}
