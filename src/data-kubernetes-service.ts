// https://www.terraform.io/docs/providers/kubernetes/d/service.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataKubernetesServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/service.html#metadata DataKubernetesService#metadata}
  */
  readonly metadata: DataKubernetesServiceMetadata[];
}
export class DataKubernetesServiceSpecPort extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // node_port - computed: true, optional: false, required: false
  public get nodePort() {
    return this.getNumberAttribute('node_port');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // target_port - computed: true, optional: false, required: false
  public get targetPort() {
    return this.getStringAttribute('target_port');
  }
}
export class DataKubernetesServiceSpec extends cdktf.ComplexComputedList {

  // cluster_ip - computed: true, optional: false, required: false
  public get clusterIp() {
    return this.getStringAttribute('cluster_ip');
  }

  // external_ips - computed: true, optional: false, required: false
  public get externalIps() {
    return this.getListAttribute('external_ips');
  }

  // external_name - computed: true, optional: false, required: false
  public get externalName() {
    return this.getStringAttribute('external_name');
  }

  // external_traffic_policy - computed: true, optional: false, required: false
  public get externalTrafficPolicy() {
    return this.getStringAttribute('external_traffic_policy');
  }

  // health_check_node_port - computed: true, optional: false, required: false
  public get healthCheckNodePort() {
    return this.getNumberAttribute('health_check_node_port');
  }

  // load_balancer_ip - computed: true, optional: false, required: false
  public get loadBalancerIp() {
    return this.getStringAttribute('load_balancer_ip');
  }

  // load_balancer_source_ranges - computed: true, optional: false, required: false
  public get loadBalancerSourceRanges() {
    return this.getListAttribute('load_balancer_source_ranges');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.interpolationForAttribute('port') as any;
  }

  // publish_not_ready_addresses - computed: true, optional: false, required: false
  public get publishNotReadyAddresses() {
    return this.getBooleanAttribute('publish_not_ready_addresses');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.interpolationForAttribute('selector') as any;
  }

  // session_affinity - computed: true, optional: false, required: false
  public get sessionAffinity() {
    return this.getStringAttribute('session_affinity');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export class DataKubernetesServiceStatusLoadBalancerIngress extends cdktf.ComplexComputedList {

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }
}
export class DataKubernetesServiceStatusLoadBalancer extends cdktf.ComplexComputedList {

  // ingress - computed: true, optional: false, required: false
  public get ingress() {
    return this.interpolationForAttribute('ingress') as any;
  }
}
export class DataKubernetesServiceStatus extends cdktf.ComplexComputedList {

  // load_balancer - computed: true, optional: false, required: false
  public get loadBalancer() {
    return this.interpolationForAttribute('load_balancer') as any;
  }
}
export interface DataKubernetesServiceMetadata {
  /**
  * An unstructured key value map stored with the service that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/service.html#annotations DataKubernetesService#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the service. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/service.html#labels DataKubernetesService#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the service, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/service.html#name DataKubernetesService#name}
  */
  readonly name?: string;
  /**
  * Namespace defines the space within which name of the service must be unique.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/service.html#namespace DataKubernetesService#namespace}
  */
  readonly namespace?: string;
}

function dataKubernetesServiceMetadataToTerraform(struct?: DataKubernetesServiceMetadata): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    annotations: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/kubernetes/d/service.html kubernetes_service}
*/
export class DataKubernetesService extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/kubernetes/d/service.html kubernetes_service} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataKubernetesServiceConfig
  */
  public constructor(scope: Construct, id: string, config: DataKubernetesServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_service',
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
    return new DataKubernetesServiceSpec(this, 'spec', index);
  }

  // status - computed: true, optional: false, required: false
  public status(index: string) {
    return new DataKubernetesServiceStatus(this, 'status', index);
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata: DataKubernetesServiceMetadata[];
  public get metadata() {
    return this.interpolationForAttribute('metadata') as any;
  }
  public set metadata(value: DataKubernetesServiceMetadata[]) {
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
      metadata: cdktf.listMapper(dataKubernetesServiceMetadataToTerraform)(this._metadata),
    };
  }
}
