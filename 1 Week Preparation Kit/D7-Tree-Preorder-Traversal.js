

/*
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function preOrder(root) {
    //InOrder: izquierda, raiz, derecha
    //PreOrder: raiz, izquierda, derecha
    //PostOrder: izquierda, derecha, raiz
    
    //console.log(root.data);

    if (!root) {
        return;
    }

    process.stdout.write(root.data + ' ');
    preOrder(root.left);
    preOrder(root.right);	
}

