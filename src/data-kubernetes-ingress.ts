// https://www.terraform.io/docs/providers/kubernetes/d/ingress.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataKubernetesIngressConfig extends cdktf.TerraformMetaArguments {
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/ingress.html#metadata DataKubernetesIngress#metadata}
  */
  readonly metadata: DataKubernetesIngressMetadata[];
}
export class DataKubernetesIngressSpecBackend extends cdktf.ComplexComputedList {

  // service_name - computed: true, optional: false, required: false
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }

  // service_port - computed: true, optional: false, required: false
  public get servicePort() {
    return this.getStringAttribute('service_port');
  }
}
export class DataKubernetesIngressSpecRuleHttpPathBackend extends cdktf.ComplexComputedList {

  // service_name - computed: true, optional: false, required: false
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }

  // service_port - computed: true, optional: false, required: false
  public get servicePort() {
    return this.getStringAttribute('service_port');
  }
}
export class DataKubernetesIngressSpecRuleHttpPath extends cdktf.ComplexComputedList {

  // backend - computed: true, optional: false, required: false
  public get backend() {
    return this.interpolationForAttribute('backend') as any;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}
export class DataKubernetesIngressSpecRuleHttp extends cdktf.ComplexComputedList {

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.interpolationForAttribute('path') as any;
  }
}
export class DataKubernetesIngressSpecRule extends cdktf.ComplexComputedList {

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // http - computed: true, optional: false, required: false
  public get http() {
    return this.interpolationForAttribute('http') as any;
  }
}
export class DataKubernetesIngressSpecTls extends cdktf.ComplexComputedList {

  // hosts - computed: true, optional: false, required: false
  public get hosts() {
    return this.getListAttribute('hosts');
  }

  // secret_name - computed: true, optional: false, required: false
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
}
export class DataKubernetesIngressSpec extends cdktf.ComplexComputedList {

  // backend - computed: true, optional: false, required: false
  public get backend() {
    return this.interpolationForAttribute('backend') as any;
  }

  // rule - computed: true, optional: false, required: false
  public get rule() {
    return this.interpolationForAttribute('rule') as any;
  }

  // tls - computed: true, optional: false, required: false
  public get tls() {
    return this.interpolationForAttribute('tls') as any;
  }
}
export class DataKubernetesIngressStatusLoadBalancerIngress extends cdktf.ComplexComputedList {

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }
}
export class DataKubernetesIngressStatusLoadBalancer extends cdktf.ComplexComputedList {

  // ingress - computed: true, optional: false, required: false
  public get ingress() {
    return this.interpolationForAttribute('ingress') as any;
  }
}
export class DataKubernetesIngressStatus extends cdktf.ComplexComputedList {

  // load_balancer - computed: true, optional: false, required: false
  public get loadBalancer() {
    return this.interpolationForAttribute('load_balancer') as any;
  }
}
export interface DataKubernetesIngressMetadata {
  /**
  * An unstructured key value map stored with the ingress that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/ingress.html#annotations DataKubernetesIngress#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the ingress. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/ingress.html#labels DataKubernetesIngress#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the ingress, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/ingress.html#name DataKubernetesIngress#name}
  */
  readonly name?: string;
  /**
  * Namespace defines the space within which name of the ingress must be unique.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/ingress.html#namespace DataKubernetesIngress#namespace}
  */
  readonly namespace?: string;
}

function dataKubernetesIngressMetadataToTerraform(struct?: DataKubernetesIngressMetadata): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    annotations: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/kubernetes/d/ingress.html kubernetes_ingress}
*/
export class DataKubernetesIngress extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/kubernetes/d/ingress.html kubernetes_ingress} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataKubernetesIngressConfig
  */
  public constructor(scope: Construct, id: string, config: DataKubernetesIngressConfig) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_ingress',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._metadata = config.metadata;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // spec - computed: true, optional: false, required: false
  public spec(index: string) {
    return new DataKubernetesIngressSpec(this, 'spec', index);
  }

  // status - computed: true, optional: false, required: false
  public status(index: string) {
    return new DataKubernetesIngressStatus(this, 'status', index);
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata: DataKubernetesIngressMetadata[];
  public get metadata() {
    return this.interpolationForAttribute('metadata') as any;
  }
  public set metadata(value: DataKubernetesIngressMetadata[]) {
    this._metadata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: cdktf.listMapper(dataKubernetesIngressMetadataToTerraform)(this._metadata),
    };
  }
}
