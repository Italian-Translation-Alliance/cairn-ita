# Test

```mermaid

graph TB
    c1-->a2
    subgraph one
    a1-->a2
    end
    subgraph two
    b1-->b2
    end
    subgraph three
    c1-->c2
    end

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
