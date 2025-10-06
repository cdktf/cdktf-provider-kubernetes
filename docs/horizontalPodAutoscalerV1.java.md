# `horizontalPodAutoscalerV1` Submodule <a name="`horizontalPodAutoscalerV1` Submodule" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HorizontalPodAutoscalerV1 <a name="HorizontalPodAutoscalerV1" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v1 kubernetes_horizontal_pod_autoscaler_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v1.HorizontalPodAutoscalerV1;

HorizontalPodAutoscalerV1.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .metadata(HorizontalPodAutoscalerV1Metadata)
    .spec(HorizontalPodAutoscalerV1Spec)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.Initializer.parameter.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Metadata">HorizontalPodAutoscalerV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.Initializer.parameter.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Spec">HorizontalPodAutoscalerV1Spec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v1#id HorizontalPodAutoscalerV1#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.Initializer.parameter.metadata"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Metadata">HorizontalPodAutoscalerV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v1#metadata HorizontalPodAutoscalerV1#metadata}

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.Initializer.parameter.spec"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Spec">HorizontalPodAutoscalerV1Spec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v1#spec HorizontalPodAutoscalerV1#spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v1#id HorizontalPodAutoscalerV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.putSpec">putSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMetadata` <a name="putMetadata" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.putMetadata"></a>

```java
public void putMetadata(HorizontalPodAutoscalerV1Metadata value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Metadata">HorizontalPodAutoscalerV1Metadata</a>

---

##### `putSpec` <a name="putSpec" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.putSpec"></a>

```java
public void putSpec(HorizontalPodAutoscalerV1Spec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Spec">HorizontalPodAutoscalerV1Spec</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a HorizontalPodAutoscalerV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v1.HorizontalPodAutoscalerV1;

HorizontalPodAutoscalerV1.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v1.HorizontalPodAutoscalerV1;

HorizontalPodAutoscalerV1.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v1.HorizontalPodAutoscalerV1;

HorizontalPodAutoscalerV1.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v1.HorizontalPodAutoscalerV1;

HorizontalPodAutoscalerV1.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),HorizontalPodAutoscalerV1.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a HorizontalPodAutoscalerV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the HorizontalPodAutoscalerV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing HorizontalPodAutoscalerV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the HorizontalPodAutoscalerV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference">HorizontalPodAutoscalerV1MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference">HorizontalPodAutoscalerV1SpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.metadataInput">metadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Metadata">HorizontalPodAutoscalerV1Metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.specInput">specInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Spec">HorizontalPodAutoscalerV1Spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.metadata"></a>

```java
public HorizontalPodAutoscalerV1MetadataOutputReference getMetadata();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference">HorizontalPodAutoscalerV1MetadataOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.spec"></a>

```java
public HorizontalPodAutoscalerV1SpecOutputReference getSpec();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference">HorizontalPodAutoscalerV1SpecOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.metadataInput"></a>

```java
public HorizontalPodAutoscalerV1Metadata getMetadataInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Metadata">HorizontalPodAutoscalerV1Metadata</a>

---

##### `specInput`<sup>Optional</sup> <a name="specInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.specInput"></a>

```java
public HorizontalPodAutoscalerV1Spec getSpecInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Spec">HorizontalPodAutoscalerV1Spec</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### HorizontalPodAutoscalerV1Config <a name="HorizontalPodAutoscalerV1Config" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v1.HorizontalPodAutoscalerV1Config;

HorizontalPodAutoscalerV1Config.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .metadata(HorizontalPodAutoscalerV1Metadata)
    .spec(HorizontalPodAutoscalerV1Spec)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Config.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Config.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Metadata">HorizontalPodAutoscalerV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Config.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Spec">HorizontalPodAutoscalerV1Spec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v1#id HorizontalPodAutoscalerV1#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Config.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Config.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Config.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Config.property.metadata"></a>

```java
public HorizontalPodAutoscalerV1Metadata getMetadata();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Metadata">HorizontalPodAutoscalerV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v1#metadata HorizontalPodAutoscalerV1#metadata}

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Config.property.spec"></a>

```java
public HorizontalPodAutoscalerV1Spec getSpec();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Spec">HorizontalPodAutoscalerV1Spec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v1#spec HorizontalPodAutoscalerV1#spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v1#id HorizontalPodAutoscalerV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### HorizontalPodAutoscalerV1Metadata <a name="HorizontalPodAutoscalerV1Metadata" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Metadata.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v1.HorizontalPodAutoscalerV1Metadata;

HorizontalPodAutoscalerV1Metadata.builder()
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .generateName(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .name(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Metadata.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | An unstructured key value map stored with the horizontal pod autoscaler that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Metadata.property.generateName">generateName</a></code> | <code>java.lang.String</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Metadata.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Map of string keys and values that can be used to organize and categorize (scope and select) the horizontal pod autoscaler. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Metadata.property.name">name</a></code> | <code>java.lang.String</code> | Name of the horizontal pod autoscaler, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Metadata.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Namespace defines the space within which name of the horizontal pod autoscaler must be unique. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Metadata.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

An unstructured key value map stored with the horizontal pod autoscaler that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v1#annotations HorizontalPodAutoscalerV1#annotations}

---

##### `generateName`<sup>Optional</sup> <a name="generateName" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Metadata.property.generateName"></a>

```java
public java.lang.String getGenerateName();
```

- *Type:* java.lang.String

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v1#generate_name HorizontalPodAutoscalerV1#generate_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Metadata.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Map of string keys and values that can be used to organize and categorize (scope and select) the horizontal pod autoscaler.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v1#labels HorizontalPodAutoscalerV1#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Metadata.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the horizontal pod autoscaler, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v1#name HorizontalPodAutoscalerV1#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Metadata.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Namespace defines the space within which name of the horizontal pod autoscaler must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v1#namespace HorizontalPodAutoscalerV1#namespace}

---

### HorizontalPodAutoscalerV1Spec <a name="HorizontalPodAutoscalerV1Spec" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Spec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Spec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v1.HorizontalPodAutoscalerV1Spec;

HorizontalPodAutoscalerV1Spec.builder()
    .maxReplicas(java.lang.Number)
    .scaleTargetRef(HorizontalPodAutoscalerV1SpecScaleTargetRef)
//  .minReplicas(java.lang.Number)
//  .targetCpuUtilizationPercentage(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Spec.property.maxReplicas">maxReplicas</a></code> | <code>java.lang.Number</code> | Upper limit for the number of pods that can be set by the autoscaler. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Spec.property.scaleTargetRef">scaleTargetRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRef">HorizontalPodAutoscalerV1SpecScaleTargetRef</a></code> | scale_target_ref block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Spec.property.minReplicas">minReplicas</a></code> | <code>java.lang.Number</code> | Lower limit for the number of pods that can be set by the autoscaler, defaults to `1`. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Spec.property.targetCpuUtilizationPercentage">targetCpuUtilizationPercentage</a></code> | <code>java.lang.Number</code> | Target average CPU utilization (represented as a percentage of requested CPU) over all the pods. |

---

##### `maxReplicas`<sup>Required</sup> <a name="maxReplicas" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Spec.property.maxReplicas"></a>

```java
public java.lang.Number getMaxReplicas();
```

- *Type:* java.lang.Number

Upper limit for the number of pods that can be set by the autoscaler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v1#max_replicas HorizontalPodAutoscalerV1#max_replicas}

---

##### `scaleTargetRef`<sup>Required</sup> <a name="scaleTargetRef" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Spec.property.scaleTargetRef"></a>

```java
public HorizontalPodAutoscalerV1SpecScaleTargetRef getScaleTargetRef();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRef">HorizontalPodAutoscalerV1SpecScaleTargetRef</a>

scale_target_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v1#scale_target_ref HorizontalPodAutoscalerV1#scale_target_ref}

---

##### `minReplicas`<sup>Optional</sup> <a name="minReplicas" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Spec.property.minReplicas"></a>

```java
public java.lang.Number getMinReplicas();
```

- *Type:* java.lang.Number

Lower limit for the number of pods that can be set by the autoscaler, defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v1#min_replicas HorizontalPodAutoscalerV1#min_replicas}

---

##### `targetCpuUtilizationPercentage`<sup>Optional</sup> <a name="targetCpuUtilizationPercentage" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Spec.property.targetCpuUtilizationPercentage"></a>

```java
public java.lang.Number getTargetCpuUtilizationPercentage();
```

- *Type:* java.lang.Number

Target average CPU utilization (represented as a percentage of requested CPU) over all the pods.

If not specified the default autoscaling policy will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v1#target_cpu_utilization_percentage HorizontalPodAutoscalerV1#target_cpu_utilization_percentage}

---

### HorizontalPodAutoscalerV1SpecScaleTargetRef <a name="HorizontalPodAutoscalerV1SpecScaleTargetRef" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRef.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v1.HorizontalPodAutoscalerV1SpecScaleTargetRef;

HorizontalPodAutoscalerV1SpecScaleTargetRef.builder()
    .kind(java.lang.String)
    .name(java.lang.String)
//  .apiVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRef.property.kind">kind</a></code> | <code>java.lang.String</code> | Kind of the referent. e.g. `ReplicationController`. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#types-kinds. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRef.property.name">name</a></code> | <code>java.lang.String</code> | Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRef.property.apiVersion">apiVersion</a></code> | <code>java.lang.String</code> | API version of the referent. |

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRef.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

Kind of the referent. e.g. `ReplicationController`. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#types-kinds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v1#kind HorizontalPodAutoscalerV1#kind}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRef.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v1#name HorizontalPodAutoscalerV1#name}

---

##### `apiVersion`<sup>Optional</sup> <a name="apiVersion" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRef.property.apiVersion"></a>

```java
public java.lang.String getApiVersion();
```

- *Type:* java.lang.String

API version of the referent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/resources/horizontal_pod_autoscaler_v1#api_version HorizontalPodAutoscalerV1#api_version}

---

## Classes <a name="Classes" id="Classes"></a>

### HorizontalPodAutoscalerV1MetadataOutputReference <a name="HorizontalPodAutoscalerV1MetadataOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v1.HorizontalPodAutoscalerV1MetadataOutputReference;

new HorizontalPodAutoscalerV1MetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.resetGenerateName">resetGenerateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetGenerateName` <a name="resetGenerateName" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.resetGenerateName"></a>

```java
public void resetGenerateName()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.generation">generation</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.resourceVersion">resourceVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.annotationsInput">annotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.generateNameInput">generateNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.generateName">generateName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Metadata">HorizontalPodAutoscalerV1Metadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.generation"></a>

```java
public java.lang.Number getGeneration();
```

- *Type:* java.lang.Number

---

##### `resourceVersion`<sup>Required</sup> <a name="resourceVersion" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.resourceVersion"></a>

```java
public java.lang.String getResourceVersion();
```

- *Type:* java.lang.String

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.annotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `generateNameInput`<sup>Optional</sup> <a name="generateNameInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.generateNameInput"></a>

```java
public java.lang.String getGenerateNameInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `generateName`<sup>Required</sup> <a name="generateName" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.generateName"></a>

```java
public java.lang.String getGenerateName();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1MetadataOutputReference.property.internalValue"></a>

```java
public HorizontalPodAutoscalerV1Metadata getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Metadata">HorizontalPodAutoscalerV1Metadata</a>

---


### HorizontalPodAutoscalerV1SpecOutputReference <a name="HorizontalPodAutoscalerV1SpecOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v1.HorizontalPodAutoscalerV1SpecOutputReference;

new HorizontalPodAutoscalerV1SpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.putScaleTargetRef">putScaleTargetRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.resetMinReplicas">resetMinReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.resetTargetCpuUtilizationPercentage">resetTargetCpuUtilizationPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putScaleTargetRef` <a name="putScaleTargetRef" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.putScaleTargetRef"></a>

```java
public void putScaleTargetRef(HorizontalPodAutoscalerV1SpecScaleTargetRef value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.putScaleTargetRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRef">HorizontalPodAutoscalerV1SpecScaleTargetRef</a>

---

##### `resetMinReplicas` <a name="resetMinReplicas" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.resetMinReplicas"></a>

```java
public void resetMinReplicas()
```

##### `resetTargetCpuUtilizationPercentage` <a name="resetTargetCpuUtilizationPercentage" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.resetTargetCpuUtilizationPercentage"></a>

```java
public void resetTargetCpuUtilizationPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.property.scaleTargetRef">scaleTargetRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference">HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.property.maxReplicasInput">maxReplicasInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.property.minReplicasInput">minReplicasInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.property.scaleTargetRefInput">scaleTargetRefInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRef">HorizontalPodAutoscalerV1SpecScaleTargetRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.property.targetCpuUtilizationPercentageInput">targetCpuUtilizationPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.property.maxReplicas">maxReplicas</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.property.minReplicas">minReplicas</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.property.targetCpuUtilizationPercentage">targetCpuUtilizationPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Spec">HorizontalPodAutoscalerV1Spec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `scaleTargetRef`<sup>Required</sup> <a name="scaleTargetRef" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.property.scaleTargetRef"></a>

```java
public HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference getScaleTargetRef();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference">HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference</a>

---

##### `maxReplicasInput`<sup>Optional</sup> <a name="maxReplicasInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.property.maxReplicasInput"></a>

```java
public java.lang.Number getMaxReplicasInput();
```

- *Type:* java.lang.Number

---

##### `minReplicasInput`<sup>Optional</sup> <a name="minReplicasInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.property.minReplicasInput"></a>

```java
public java.lang.Number getMinReplicasInput();
```

- *Type:* java.lang.Number

---

##### `scaleTargetRefInput`<sup>Optional</sup> <a name="scaleTargetRefInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.property.scaleTargetRefInput"></a>

```java
public HorizontalPodAutoscalerV1SpecScaleTargetRef getScaleTargetRefInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRef">HorizontalPodAutoscalerV1SpecScaleTargetRef</a>

---

##### `targetCpuUtilizationPercentageInput`<sup>Optional</sup> <a name="targetCpuUtilizationPercentageInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.property.targetCpuUtilizationPercentageInput"></a>

```java
public java.lang.Number getTargetCpuUtilizationPercentageInput();
```

- *Type:* java.lang.Number

---

##### `maxReplicas`<sup>Required</sup> <a name="maxReplicas" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.property.maxReplicas"></a>

```java
public java.lang.Number getMaxReplicas();
```

- *Type:* java.lang.Number

---

##### `minReplicas`<sup>Required</sup> <a name="minReplicas" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.property.minReplicas"></a>

```java
public java.lang.Number getMinReplicas();
```

- *Type:* java.lang.Number

---

##### `targetCpuUtilizationPercentage`<sup>Required</sup> <a name="targetCpuUtilizationPercentage" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.property.targetCpuUtilizationPercentage"></a>

```java
public java.lang.Number getTargetCpuUtilizationPercentage();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecOutputReference.property.internalValue"></a>

```java
public HorizontalPodAutoscalerV1Spec getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1Spec">HorizontalPodAutoscalerV1Spec</a>

---


### HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference <a name="HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference;

new HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.resetApiVersion">resetApiVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApiVersion` <a name="resetApiVersion" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.resetApiVersion"></a>

```java
public void resetApiVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.property.apiVersionInput">apiVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.property.kindInput">kindInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.property.apiVersion">apiVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRef">HorizontalPodAutoscalerV1SpecScaleTargetRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiVersionInput`<sup>Optional</sup> <a name="apiVersionInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.property.apiVersionInput"></a>

```java
public java.lang.String getApiVersionInput();
```

- *Type:* java.lang.String

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.property.kindInput"></a>

```java
public java.lang.String getKindInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `apiVersion`<sup>Required</sup> <a name="apiVersion" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.property.apiVersion"></a>

```java
public java.lang.String getApiVersion();
```

- *Type:* java.lang.String

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference.property.internalValue"></a>

```java
public HorizontalPodAutoscalerV1SpecScaleTargetRef getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV1.HorizontalPodAutoscalerV1SpecScaleTargetRef">HorizontalPodAutoscalerV1SpecScaleTargetRef</a>

---



