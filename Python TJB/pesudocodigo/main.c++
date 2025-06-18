#include <iostream>

int main(int argc, char** argv){

    int64_t num1{};
    int64_t num2{};

    std::cout << "insira dois numeros para serem lidos\n";

    std::cin >> num1;
    std::cin >> num2;
    
    if(std::cin.fail()){
        std::cin.clear();
        std::cout << "entrada inválida";
        return 1;
    }

    std::cout << "o seu número somado é: " << num1 + num2;

    return 0;
}