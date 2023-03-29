# M413 - TD2 : Réponses aux Questions

6.1
    J'ai ajouté l'écouteur d'évènement sur le document grâce à la méthode addEventListener(), avec comme évènement "click"
    
    Si on utilise currentTarget en lieu et place de target, cela me produit une erreur de ce type : "Uncaught TypeError: Cannot set properties of undefined (setting 'backgroundColor')
    at HTMLDocument.select"
    
6.2
    Pour ajouter l'élément, j'ai utilisé la méthode insertBefore(). J'ai appelé la méthode sur le parent de la cible (target) pour que l'insertion s'effectue avant l'élément sélectionné.
    
    Pour que la fonction ignore les éléments de la <div> donnée, j'ai utilisé la méthode closest() qui m'a permit de savoir si l'id le plus proche était celui de la <div>, qui m'a donc permit de savoir si on cliquait sur cette fameuse <div>.
