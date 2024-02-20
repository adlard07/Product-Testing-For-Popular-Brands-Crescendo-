from datetime import datetime, timedelta
import faker
import random

fake = faker.Faker()

def generate_data(num_records):
    datum = []

    brand = fake.company()
    for _ in range(num_records):
        product_id = [fake.uuid4() for _ in range(random.randint(1, 6))]
        product_list = [
            'Classic Potato Chips', 
            'BBQ Potato Chips', 
            'Sour Cream & Onion Potato Chips', 
            'Cheddar & Sour Cream Patato Chips',
            'Magic Masala Patato Chips',
            'Spanish Tomato Tango Patato Chips',
            ]
        
        ingredients_list = [fake.word() for _ in range(random.randint(1, 10))]
        allergen_info = [fake.word() for _ in range(random.randint(1, 5))]
        
        nutritional_info = {
            'calories': random.randint(50, 500),
            'fat': random.uniform(0, 50),
            'carbohydrates': random.uniform(0, 100),
            'protein': random.uniform(0, 50)
        }
        
        batch_number = fake.random_int(min=1000, max=9999)
        manufacturing_date = fake.date_between(start_date='-2y', end_date='today')
        expiration_date = manufacturing_date + timedelta(days=random.randint(30, 365))
        
        data = {
            'Product ID': product_id,
            'Brand': brand,
            'Product list': product_list,
            'Ingredients List': ingredients_list,
            'Allergen Information': allergen_info,
            'Nutritional Information': nutritional_info,
            'Batch/lot number': batch_number,
            'Manufacturing Date': manufacturing_date,
            'Expiration Date': expiration_date
        }
        
        datum.append(data)
    return datum

if __name__=='__main__':
    num_records = 100
    generated_data = generate_data(num_records)
    print(generated_data)