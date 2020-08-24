// https://www.terraform.io/docs/providers/kubernetes/r/data_kubernetes_ingress.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataKubernetesIngressConfig extends TerraformMetaArguments {
  /** metadata block */
  readonly metadata: DataKubernetesIngressMetadata[];
}
export class DataKubernetesIngressLoadBalancerIngress extends ComplexComputedList {

  // hostname - computed: true, optional: false, required: true
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // ip - computed: true, optional: false, required: true
  public get ip() {
    return this.getStringAttribute('ip');
  }
}
export class DataKubernetesIngressSpecBackend extends ComplexComputedList {

  // service_name - computed: true, optional: false, required: true
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }

  // service_port - computed: true, optional: false, required: true
  public get servicePort() {
    return this.getStringAttribute('service_port');
  }
}
export class DataKubernetesIngressSpecRuleHttpPathBackend extends ComplexComputedList {

  // service_name - computed: true, optional: false, required: true
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }

  // service_port - computed: true, optional: false, required: true
  public get servicePort() {
    return this.getStringAttribute('service_port');
  }
}
export class DataKubernetesIngressSpecRuleHttpPath extends ComplexComputedList {

  // backend - computed: true, optional: false, required: true
  public get backend() {
    return 'not implemented' as any;
  }

  // path - computed: true, optional: false, required: true
  public get path() {
    return this.getStringAttribute('path');
  }
}
export class DataKubernetesIngressSpecRuleHttp extends ComplexComputedList {

  // path - computed: true, optional: false, required: true
  public get path() {
    return 'not implemented' as any;
  }
}
export class DataKubernetesIngressSpecRule extends ComplexComputedList {

  // host - computed: true, optional: false, required: true
  public get host() {
    return this.getStringAttribute('host');
  }

  // http - computed: true, optional: false, required: true
  public get http() {
    return 'not implemented' as any;
  }
}
export class DataKubernetesIngressSpecTls extends ComplexComputedList {

  // hosts - computed: true, optional: false, required: true
  public get hosts() {
    return this.getListAttribute('hosts');
  }

  // secret_name - computed: true, optional: false, required: true
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
}
export class DataKubernetesIngressSpec extends ComplexComputedList {

  // backend - computed: true, optional: false, required: true
  public get backend() {
    return 'not implemented' as any;
  }

  // rule - computed: true, optional: false, required: true
  public get rule() {
    return 'not implemented' as any;
  }

  // tls - computed: true, optional: false, required: true
  public get tls() {
    return 'not implemented' as any;
  }
}
export interface DataKubernetesIngressMetadata {
  /** An unstructured key value map stored with the ingress that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations */
  readonly annotations?: { [key: string]: string };
  /** Map of string keys and values that can be used to organize and categorize (scope and select) the ingress. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels */
  readonly labels?: { [key: string]: string };
  /** Name of the ingress, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Namespace defines the space within which name of the ingress must be unique. */
  readonly namespace?: string;
}

// Resource

export class DataKubernetesIngress extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // load_balancer_ingress - computed: true, optional: false, required: true
  public loadBalancerIngress(index: string) {
    return new DataKubernetesIngressLoadBalancerIngress(this, 'load_balancer_ingress', index);
  }

  // spec - computed: true, optional: false, required: true
  public spec(index: string) {
    return new DataKubernetesIngressSpec(this, 'spec', index);
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata: DataKubernetesIngressMetadata[];
  public get metadata() {
    return this._metadata;
  }
  public set metadata(value: DataKubernetesIngressMetadata[]) {
    this._metadata = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: this._metadata,
    };
  }
}
