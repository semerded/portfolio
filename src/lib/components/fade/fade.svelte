<script lang="ts">
    import './fade.css';
  
    export let startColor: string;
    export let endColor: string;
  
    let style = '';
  
    if (startColor && endColor) {
      style = `--start-color: ${startColor}; --end-color: ${endColor}`;
    }
  </script>
  
  <div class="fade" style={style}></div>