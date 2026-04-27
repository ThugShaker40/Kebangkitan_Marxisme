function switchTab(id){
  document.querySelectorAll('.tab-btn').forEach((b,i)=>{
    const ids=['materialism','class','value','dialectics'];
    b.classList.toggle('active',ids[i]===id);
  });
  document.querySelectorAll('.tab-content').forEach(t=>{
    t.classList.remove('active');
  });
  document.getElementById('tab-'+id).classList.add('active');
}

const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('visible');
    }
  });
},{threshold:0.12});

document.querySelectorAll('.reveal,.timeline-item').forEach(el=>observer.observe(el));
