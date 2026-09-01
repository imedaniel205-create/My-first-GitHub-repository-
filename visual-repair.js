document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('link[href*="Cormorant"],link[href*="Manrope"]').forEach(el=>el.remove());
  document.querySelectorAll('.fictional').forEach(el=>el.remove());
  const page=location.pathname.split('/').pop()||'index.html';
  const images={
    index:{hero:'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2200&q=88',feature:'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1800&q=88',architecture:'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=88'},
    about:{story:'https://images.unsplash.com/photo-1600573472550-8090b5e5b5b0?auto=format&fit=crop&w=1500&q=86'},
    approach:{architecture:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=88'},
    properties:{palmview:['https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1800&q=88','https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85','https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85'],gardens:['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=88','https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85','https://images.unsplash.com/photo-1600573472550-8090b5e5b5b0?auto=format&fit=crop&w=1200&q=85'],maple:['https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1800&q=88','https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85','https://images.unsplash.com/photo-1600585154363-67eb9e2e209e?auto=format&fit=crop&w=1200&q=85'],havenvillas:['https://images.unsplash.com/photo-1600585154363-67eb9e2e209e?auto=format&fit=crop&w=1800&q=88','https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=85','https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85'],aurelia:['https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=88','https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=85','https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85'],cedar:['https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=88','https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85','https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85'],willow:['https://images.unsplash.com/photo-1600573472550-8090b5e5b5b0?auto=format&fit=crop&w=1800&q=88','https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85','https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=85'],stonebridge:['https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1800&q=88','https://images.unsplash.com/photo-1600585154363-67eb9e2e209e?auto=format&fit=crop&w=1200&q=85','https://images.unsplash.com/photo-1600573472550-8090b5e5b5b0?auto=format&fit=crop&w=1200&q=85']}
  };
  const set=(el,src)=>{if(el&&src)el.src=src};
  if(page==='index.html'||page===''){
    set(document.querySelector('.hero-cinema>img'),images.index.hero);
    set(document.querySelector('.feature-image img'),images.index.feature);
    set(document.querySelector('.architecture-break img'),images.index.architecture);
  }
  if(page==='about.html')set(document.querySelector('.story img'),images.about.story);
  if(page==='approach.html')set(document.querySelector('.architecture-break img'),images.approach.architecture);
  if(page==='property.html'){
    const id=new URLSearchParams(location.search).get('id')||'palmview',setImages=images.properties[id];
    if(setImages){
      set(document.querySelector('.detail-hero img'),setImages[0]);
      document.querySelectorAll('.gallery img').forEach((img,i)=>set(img,setImages[i+1]||setImages[0]));
    }
  }
  const status=document.getElementById('formStatus');
  if(status)status.textContent='';
  const form=document.getElementById('inquiryForm');
  if(form)form.addEventListener('submit',()=>setTimeout(()=>{const s=document.getElementById('formStatus');if(s)s.textContent='Thank you. Your enquiry has been received.'},760));
});
