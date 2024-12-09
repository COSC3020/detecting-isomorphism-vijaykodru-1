# Graph Isomorphism

Devise an algorithm to determine whether two given graphs are isomorphic or not.
It takes two graphs as an argument and returns `true` or `false`, depending on
whether the graphs are isomorphic or not. Your algorithm needs to handle both
the case where the two graphs are isomorphic and where they are not isomorphic.

Hint: Your algorithm does not need to be the best possible algorithm, but should
avoid unnecessarily repeating work.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ time complexity of your algorithm?

The worst case time complexity for the code implemented can be accquired by evaluting every step.

First of we check if the graphs have same number of veritices or edgeswhich takes $O(1)$. Next we create the adjacent matrix for the grpahs which takes $O(no. of edges)$. Next the code then finds the degreeesequence of the matrix and sorts them, which takes $O(n^2 * nlogn)$ which simplifies to be $O(n^2)$. For generating all vertices of the given graphs it takes $O(n!)$. Finalling validating the matrix takes $O(n^2)$. In total we end up with $O(2n^2 * n!)$. Asymptotically we ignore constants. So the final worst case complexity of the code is $\Theta(n^2 * n!)$


References:

https://www.youtube.com/watch?v=RoDR40UG--s

https://stackoverflow.com/questions/3876354/algorithm-for-determining-if-2-graphs-are-isomorphic

https://math.stackexchange.com/questions/2486944/how-to-tell-whether-two-graphs-are-isomorphic

The above video and the links gave me a good understanding how I can check two graphs are equal or not. This helped get the idea of creating the getdegreesequence method in order to see if the graphs are not isomorphic.

detecting-isomorphism-DJReflexive

The used the generate permutations method from the above repository. However I was able to change the whole method and implement it in a different way. I used recursion to implement my method.

