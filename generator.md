# Combat Flowchart

```mermaid

graph TD
    E[Fight] --> G{Dmg<br>Die?}
    G -->|disadvange?| H[impaired 1d4]
    G -->|advange?| I[enhanced 1d12]
    G -->|standard| L[weapon die]
    H --> M{Atk<br>Type?}
    I --> M
    L --> M  
    M -->|Dual weapon| N[Pick best roll]
    M -->|Multiple Attackers| N
    M -->|Blast| P[Roll for each target]
    M -->Q[Standard]
    N --> R{"#40;Dmg-Armor#41;-HP"} 
    P --> R
    Q --> R
    R --> |HP > 0| S[done]
    R --> |HP = 0| T[roll scars]
    R --> |HP < 0| U[subtract STR]
    U --> |STR > 0| W{Crit?<br>STR save}
    U --> |STR =< 0| Z[death]
    W --> |success?| 1["done"]
    W --> |fail?| 2["crit"]
    
 classDef default width:150px;
```


<script src="https://cdnjs.cloudflare.com/ajax/libs/mermaid/8.0.0/mermaid.min.js"></script>
  <script>
  var config = {
      startOnLoad:true,
      theme: 'default',
      flowchart:{
              useMaxWidth:false,
              htmlLabels:true
          }
  };
  mermaid.initialize(config);
  window.mermaid.init(undefined, document.querySelectorAll('.language-mermaid'));
  </script>
  <style media="screen">
    code.language-mermaid {
      background-color: transparent;
      border: none;
    }
  </style>
