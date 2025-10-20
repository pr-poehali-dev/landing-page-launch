import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const materials = [
    {
      title: "Дерево",
      description: "Натуральная текстура и теплота материала",
      icon: "TreePine",
      image: "https://cdn.poehali.dev/projects/e09e0fcc-4937-422a-b413-44d896f17b6e/files/337cf665-4b3d-4208-9e6c-687414430a69.jpg"
    },
    {
      title: "Металл",
      description: "Прочность и современный вид изделий",
      icon: "Wrench",
      image: "https://cdn.poehali.dev/projects/e09e0fcc-4937-422a-b413-44d896f17b6e/files/01588060-51da-4b68-b6d5-3a51e095b23f.jpg"
    },
    {
      title: "Стекло",
      description: "Элегантность и изысканность дизайна",
      icon: "Wine",
      image: "https://cdn.poehali.dev/projects/e09e0fcc-4937-422a-b413-44d896f17b6e/files/011b6f5c-ec1a-443f-b8c2-ea2de6c1b653.jpg"
    },
    {
      title: "Кожа",
      description: "Премиальное качество и уникальный стиль",
      icon: "Wallet",
      image: "https://cdn.poehali.dev/projects/e09e0fcc-4937-422a-b413-44d896f17b6e/files/337cf665-4b3d-4208-9e6c-687414430a69.jpg"
    }
  ];

  const benefits = [
    {
      icon: "Zap",
      title: "Высокая точность",
      description: "Лазерная технология гарантирует детализацию до 0.01 мм"
    },
    {
      icon: "Clock",
      title: "Быстрое выполнение",
      description: "Готовность заказа от 1 дня, срочные заказы — за 4 часа"
    },
    {
      icon: "Sparkles",
      title: "Любая сложность",
      description: "Реализуем проекты от простых надписей до сложных узоров"
    },
    {
      icon: "Award",
      title: "Гарантия качества",
      description: "100% гарантия на все виды работ, бесплатные корректировки"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-background">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 animate-pulse" style={{ animationDuration: '4s' }}></div>
        
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
              Лазерная Гравировка
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium">
              Превращаем ваши идеи в реальность на дереве, металле, стекле и коже
            </p>
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-transform shadow-2xl">
              Заказать гравировку
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      <section className="py-20 container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Материалы для гравировки
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Работаем с самыми разными материалами для создания уникальных изделий
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {materials.map((material, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={material.image} 
                  alt={material.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <Icon name={material.icon as any} size={32} className="mb-2" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {material.title}
                </h3>
                <p className="text-muted-foreground">
                  {material.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Почему выбирают нас
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary mb-6 group-hover:shadow-xl transition-shadow">
                  <Icon name={benefit.icon as any} size={36} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Оставьте заявку
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Ответим в течение 15 минут и рассчитаем стоимость вашего заказа
          </p>
          
          <Card className="border-2 shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Ваше имя
                  </label>
                  <Input 
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="text-lg"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Телефон
                  </label>
                  <Input 
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="text-lg"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Описание заказа
                  </label>
                  <Textarea 
                    placeholder="Расскажите, что вы хотите выгравировать..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="text-lg"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full text-lg py-6 bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-transform shadow-lg"
                >
                  Отправить заявку
                  <Icon name="Send" className="ml-2" size={20} />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 bg-muted/30 border-t">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p className="text-lg">© 2024 Лазерная Гравировка. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
