/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package test;

/**
 *
 * @author Greeny
 */
public class Test {

 private String matricula,modelo;
 private short cilindrada, velocidad=0;
 
 public void acelerar(){
     
     while (velocidad < 50){
     velocidad ++;
     System.out.println(velocidad);
     }
 }
    
}
