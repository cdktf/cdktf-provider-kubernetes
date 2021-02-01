// https://www.terraform.io/docs/providers/kubernetes/r/data_kubernetes_all_namespaces.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataKubernetesAllNamespacesConfig extends cdktf.TerraformMetaArguments {
}

// Resource

export class DataKubernetesAllNamespaces extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataKubernetesAllNamespacesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_all_namespaces',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // namespaces - computed: true, optional: false, required: false
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }
}
